<?php

namespace Drupal\react_jitsi\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\DependencyInjection\ContainerInjectionInterface;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\Core\Form\FormBuilderInterface;
use Drupal\Core\Path\CurrentPathStack;
use Drupal\Core\Session\AccountProxyInterface;
use Drupal\user\Entity\User;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Class ReactJitsiController.
 */
class ReactJitsiController extends ControllerBase implements ContainerInjectionInterface {

  /**
   * The current path.
   *
   * @return \Drupal\Core\Path\CurrentPathStack
   */
  protected $currentPath;

  /**
   * @var User
   */
  protected $currentUser;

  /**
   * @var EntityTypeManagerInterface
   */
  protected $entityTypeManager;

  /**
   * @var FormBuilderInterface
   */
  protected $formBuilder;

  /**
   * Constructs a ReactJitsiController object
   *
   * @param CurrentPathStack $current_path
   * @param AccountProxyInterface $currentUser
   * @param EntityTypeManagerInterface $entityTypeManager
   * @param FormBuilderInterface $formBuilder
   */
  public function __construct(
    CurrentPathStack $current_path,
    AccountProxyInterface $currentUser,
    EntityTypeManagerInterface $entityTypeManager,
    FormBuilderInterface $formBuilder
  ) {
    $this->currentPath = $current_path;
    $this->currentUser = User::load($currentUser->id());
    $this->entityTypeManager = $entityTypeManager;
    $this->formBuilder = $formBuilder;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('path.current'),
      $container->get('current_user'),
      $container->get('entity_type.manager'),
      $container->get('form_builder')
    );
  }

  /**
   * React page.
   *
   * @return array
   *   Render array.
   */
  public function reactPage() {
    return [
      '#type' => 'inline_template',
      '#template' => '',
    ];
  }

}
