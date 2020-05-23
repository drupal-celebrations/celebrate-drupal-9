<?php

namespace Drupal\user_registration\Plugin\Field\FieldFormatter;

use Drupal\Core\Link;
use Drupal\Core\Url;

trait UserFormatterTrait {

  /**
   * Returns an icon Link.
   *
   * @param string $image_path
   * @param string $image_alt
   * @param string $image_size
   * @param string $link_path
   *
   * @return Link
   */
  protected function getIconLink($image_path, $image_alt, $image_size, $link_path) {
    $image = [
      '#type' => 'inline_template',
      '#template' => '<img src="{{ image_path }}" width="{{ image_size }}" height="{{ image_size }}" title="{{ image_alt }}" alt="{{ image_alt }}" class="user-link" />',
      '#context' => [
        'image_path' => $image_path,
        'image_alt' => $image_alt,
        'image_size' => $image_size,
      ],
    ];
    $renderedImage = \Drupal::service('renderer')->render($image);
    $result = Link::fromTextAndUrl(
      $renderedImage,
      Url::fromUri($link_path, [
        'attributes' => [
          'target' => '_blank',
        ],
      ])
    );
    return $result;
  }

}
