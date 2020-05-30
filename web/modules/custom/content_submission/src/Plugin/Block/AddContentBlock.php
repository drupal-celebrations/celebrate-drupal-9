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

  private function getLinkFromRoute($label, $route, $classes = []) {
    $url = Url::fromRoute($route);
    if (!empty($classes)) {
      $options = [
        'attributes' => [
          'class' => $classes
        ],
      ];
    }
    $url->setOptions($options);
    return Link::fromTextAndUrl($label, $url)->toRenderable();
  }

  /**
   * {@inheritdoc}
   */
  public function build() {
    $build = [];
    if ($this->currentUser->isAuthenticated()) {
      $build = [
        '#theme' => 'add_content',
      ];
    }
    else {
      $buttonClasses = [
        'text-center',
        'block',
        'border',
        'border-blue-500',
        'py-2',
        'px-4',
      ];
      $primaryButtonClasses = array_merge($buttonClasses, [
        'bg-blue-500',
        'hover:bg-blue-600',
        'text-white',
      ]);
      $secondaryButtonClasses = array_merge($buttonClasses, [
        'bg-white',
        'hover:bg-blue-300',
        'text-blue',
      ]);
      $build = [
        '#theme' => 'user_links',
        '#links' => [
          $this->getLinkFromRoute($this->t('Create an account'), 'user.register', $primaryButtonClasses),
          $this->getLinkFromRoute($this->t('Login'), 'user.login', $secondaryButtonClasses),
        ]
      ];
    }
    return $build;
  }

}
