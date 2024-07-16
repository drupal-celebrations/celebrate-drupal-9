<?php

namespace Drupal\user_registration\Plugin\Field\FieldFormatter;

use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Field\FormatterBase;
use Drupal\Core\Link;
use Drupal\Core\StringTranslation\StringTranslationTrait;
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

  use StringTranslationTrait;
  use UserFormatterTrait;

  /**
   * {@inheritdoc}
   */
  public function viewElements(FieldItemListInterface $items, $langcode) {
    $element = [];
    foreach ($items as $delta => $item) {
      $linkPath = 'https://twitter.com/' . $item->value;
      $imageAlt = $this->t('Twitter profile of @name', [
        '@name' => $item->value,
      ]);

      $uri = drupal_get_path('module', 'user_registration') . '/images/twitter-logo.svg';
      $imagePath = \Drupal::service('file_url_generator')->generateAbsoluteString($uri);

      $element[$delta] = $this->getIconLink($imagePath, $imageAlt, '25', $linkPath)->toRenderable();
    }
    return $element;
  }

}
