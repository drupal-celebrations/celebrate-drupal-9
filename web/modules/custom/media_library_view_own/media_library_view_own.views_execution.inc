<?php

use Drupal\Core\Database\Query\Condition;
use Drupal\views\ViewExecutable;
use Drupal\views\Plugin\views\query\QueryPluginBase;

/**
 * Implements hook_views_query_alter().
 */
function media_library_view_own_views_query_alter(ViewExecutable $view, QueryPluginBase $query) {
  if ($view->id() === 'media_library') {
    $currentUser = \Drupal::currentUser();
    if (
      $currentUser->isAuthenticated() &&
      !$currentUser->hasPermission('access media overview')
    ) {
      $and = new Condition('AND');
      $query->addWhere(
        'conditions',
        $and->condition('media_field_data.uid', $currentUser->id())
      );
    }
  }
}

