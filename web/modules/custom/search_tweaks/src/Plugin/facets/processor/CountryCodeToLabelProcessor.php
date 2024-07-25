<?php

namespace Drupal\search_tweaks\Plugin\facets\processor;

use CommerceGuys\Addressing\Country\CountryRepositoryInterface;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Drupal\facets\Annotation\FacetsProcessor;
use Drupal\facets\FacetInterface;
use Drupal\facets\Processor\BuildProcessorInterface;
use Drupal\facets\Processor\ProcessorPluginBase;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Provides a processor that transforms the results to show the list item label.
 *
 * @FacetsProcessor(
 *   id = "country_code_label",
 *   label = @Translation("Country code to label"),
 *   description = @Translation("Converts country code to label"),
 *   stages = {
 *     "build" = 5
 *   }
 * )
 */
class CountryCodeToLabelProcessor extends ProcessorPluginBase implements BuildProcessorInterface, ContainerFactoryPluginInterface {

  /**
   * Country repository.
   *
   * @var \CommerceGuys\Addressing\Country\CountryRepositoryInterface
   */
  private CountryRepositoryInterface $countryRepository;

  /**
   * Constructs a Drupal\Component\Plugin\PluginBase object.
   *
   * @param array $configuration
   *   A configuration array containing information about the plugin instance.
   * @param string $plugin_id
   *   The plugin_id for the plugin instance.
   * @param mixed $plugin_definition
   *   The plugin implementation definition.
   * @param \CommerceGuys\Addressing\Country\CountryRepositoryInterface $countryRepository
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, CountryRepositoryInterface $countryRepository) {
    parent::__construct($configuration, $plugin_id, $plugin_definition);

    $this->countryRepository = $countryRepository;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition): CountryCodeToLabelProcessor|ContainerFactoryPluginInterface|static {
    return new static(
      $configuration,
      $plugin_id,
      $plugin_definition,
      $container->get('address.country_repository')
    );
  }

  /**
   * {@inheritdoc}
   */
  public function build(FacetInterface $facet, array $results): array {
    $countries = $this->countryRepository->getAll();
    foreach ($results as &$result) {
      $countryCode = strtoupper($result->getRawValue());
      if (!isset($countries[$countryCode])) {
        continue;
      }
      $country = $countries[$countryCode];
      $result->setDisplayValue($country->getName());
    }

    return $results;
  }

}
