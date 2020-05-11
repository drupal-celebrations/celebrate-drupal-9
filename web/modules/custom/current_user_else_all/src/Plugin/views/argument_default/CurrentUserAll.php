<?php

namespace Drupal\current_user_else_all\Plugin\views\argument_default;

use Drupal\Core\Cache\Cache;
use Drupal\Core\Cache\CacheableDependencyInterface;
use Drupal\views\Plugin\views\argument_default\ArgumentDefaultPluginBase;

/**
 * Contextual filter for current user else 'all' if admin role.
 *
 * @ViewsArgumentDefault(
 *   id = "current_user_else_all",
 *   title = @Translation("Current user else all")
 * )
 */
class CurrentUserAll extends ArgumentDefaultPluginBase implements CacheableDependencyInterface {

  /**
   * {@inheritdoc}
   */
  public function getArgument() {
    $currentUser = \Drupal::currentUser();

    if ($currentUser->id() === 1) {
      return 'all';
    }

    if (in_array('content_moderator', $currentUser->getRoles())) {
      return 'all';
    }

    return $currentUser->id();
  }

  /**
   * {@inheritdoc}
   */
  public function getCacheMaxAge() {
    return Cache::PERMANENT;
  }

  /**
   * {@inheritdoc}
   */
  public function getCacheContexts() {
    return ['user'];
  }

}
