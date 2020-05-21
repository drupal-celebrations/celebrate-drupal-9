<?php

namespace Drupal\user_registration\Plugin\Field\FieldFormatter;

use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Field\FormatterBase;
use Drupal\Core\Link;
use Drupal\Core\Url;

/**
 * Plugin implementation of the 'Drupal.org username' formatter.
 *
 * @FieldFormatter(
 *   id = "user_registration_drupal_org_username",
 *   label = @Translation("Drupal.org username"),
 *   field_types = {
 *     "string"
 *   }
 * )
 */
class DrupalOrgUsernameFormatter extends FormatterBase {

  /**
   * {@inheritdoc}
   */
  public function viewElements(FieldItemListInterface $items, $langcode) {
    $element = [];

    foreach ($items as $delta => $item) {
      $url = 'https://drupal.org/u/' . $item->value;
      $element[$delta] = Link::fromTextAndUrl(
        "Drupal.org profile",
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
