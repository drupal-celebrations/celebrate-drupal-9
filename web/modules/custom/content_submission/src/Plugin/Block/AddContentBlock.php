<?php

namespace Drupal\content_submission\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Link;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Drupal\Core\Url;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Provides a 'AddContentBlock' block.
 *
 * Displays user register or login link to anonymous users.
 * Displays content types list to authenticated users.
 *
 * @Block(
 *  id = "add_content_block",
 *  admin_label = @Translation("Add content"),
 * )
 */
class AddContentBlock extends BlockBase implements ContainerFactoryPluginInterface {

  /**
   * Drupal\Core\Entity\EntityTypeManagerInterface definition.
   *
   * @var \Drupal\Core\Entity\EntityTypeManagerInterface
   */
  protected $entityTypeManager;

  /**
   * Drupal\Core\Session\AccountProxyInterface definition.
   *
   * @var \Drupal\Core\Session\AccountProxyInterface
   */
  protected $currentUser;

  /**
   * Drupal\Core\Render\RendererInterface definition.
   *
   * @var \Drupal\Core\Render\RendererInterface
   */
  protected $renderer;

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
    $instance = new static($configuration, $plugin_id, $plugin_definition);
    $instance->entityTypeManager = $container->get('entity_type.manager');
    $instance->currentUser = $container->get('current_user');
    $instance->renderer = $container->get('renderer');
    return $instance;
  }

  /**
   * Returns a render array of the node add list.
   *
   * @return array
   */
  private function getNodeTypeList() {
    $build = [
      '#theme' => 'node_add_list',
      '#cache' => [
        'tags' => $this->entityTypeManager->getDefinition('node_type')->getListCacheTags(),
      ],
    ];
    $content = [];
    // Only use node types the user has access to.
    foreach ($this->entityTypeManager->getStorage('node_type')->loadMultiple() as $type) {
      $access = $this->entityTypeManager->getAccessControlHandler('node')->createAccess($type->id(), NULL, [], TRUE);
      if ($access->isAllowed()) {
        $content[$type->id()] = $type;
      }
      $this->renderer->addCacheableDependency($build, $access);
    }
    $build['#content'] = $content;
    return $build;
  }

  private function getLinkFromRoute($label, $route, $class = '') {
    $url = Url::fromRoute($route);
    return Link::fromTextAndUrl($label, $url)->toRenderable();
  }

  /**
   * {@inheritdoc}
   */
  public function build() {
    $build = [];
    if ($this->currentUser->isAuthenticated()) {
      $build = $this->getNodeTypeList();
    }
    else {
      $build = [
        '#theme' => 'user_links',
        '#links' => [
          $this->getLinkFromRoute($this->t('Create an account'), 'user.register'),
          $this->getLinkFromRoute($this->t('Login'), 'user.login'),
        ]
      ];
    }
    return $build;
  }

}
