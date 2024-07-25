<?php

namespace Drupal\user_registration\Plugin\Field\FieldFormatter;

use Drupal\Core\Field\Annotation\FieldFormatter;
use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Field\FormatterBase;
use Drupal\Core\StringTranslation\StringTranslationTrait;

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
  public function viewElements(FieldItemListInterface $items, $langcode): array {
    $element = [];
    foreach ($items as $delta => $item) {
      $linkPath = 'https://twitter.com/' . $item->value;
      $imageAlt = $this->t('Twitter profile of @name', [
        '@name' => $item->value,
      ]);

      $uri = \Drupal::service('extension.list.module')->getPath('user_registration') . '/images/twitter-logo.svg';
      $imagePath = \Drupal::service('file_url_generator')->generateAbsoluteString($uri);

      $element[$delta] = $this->getIconLink($imagePath, $imageAlt, '25', $linkPath)->toRenderable();
    }

    return $element;
  }

}
