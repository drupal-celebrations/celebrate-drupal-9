<?php

namespace Drupal\user_registration\Plugin\Field\FieldFormatter;

use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Field\FormatterBase;
use Drupal\Core\Link;
use Drupal\Core\StringTranslation\StringTranslationTrait;
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

  use StringTranslationTrait;
  use UserFormatterTrait;

  /**
   * {@inheritdoc}
   */
  public function viewElements(FieldItemListInterface $items, $langcode) {
    $element = [];
    foreach ($items as $delta => $item) {
      $linkPath = 'https://drupal.org/u/' . $item->value;

      $entity = $item->getEntity();
      if ($entity->hasField('field_company_account') && $entity->get('field_company_account')->value) {
        $linkPath = 'https://drupal.org/' . $item->value;
      }

      $imageAlt = $this->t('Drupal.org profile of @name', [
        '@name' => $item->value,
      ]);

      $uri = \Drupal::service('extension.list.module')->getPath('user_registration') . '/images/drupal-evergreen-logo.svg';
      $imagePath = \Drupal::service('file_url_generator')->generateAbsoluteString($uri);

      $element[$delta] = $this->getIconLink($imagePath, $imageAlt, '20', $linkPath)->toRenderable();
    }
    return $element;
  }

}
