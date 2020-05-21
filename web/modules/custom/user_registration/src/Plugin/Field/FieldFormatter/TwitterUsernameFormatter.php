<?php

namespace Drupal\user_registration\Plugin\Field\FieldFormatter;

use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Field\FormatterBase;
use Drupal\Core\Link;
use Drupal\Core\Url;

/**
 * Plugin implementation of the 'Twitter username' formatter.
 *
 * @FieldFormatter(
 *   id = "user_registration_twitter_username",
 *   label = @Translation("Twitter username"),
 *   field_types = {
 *     "string"
 *   }
 * )
 */
class TwitterUsernameFormatter extends FormatterBase {

  /**
   * {@inheritdoc}
   */
  public function viewElements(FieldItemListInterface $items, $langcode) {
    $element = [];

    foreach ($items as $delta => $item) {
      $url = 'https://twitter.com/' . $item->value;
      $element[$delta] = Link::fromTextAndUrl(
        "Twitter profile",
        Url::fromUri($url, [
          'attributes' => [
            'target' => '_blank',
          ],
        ])
      )->toRenderable();
    }

    return $element;
  }

}
