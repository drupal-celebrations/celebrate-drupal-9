<?php

namespace Drupal\color_map;

/**
 * Class ColorMap.
 */
class ColorMap {

  private static $fallbackColor = 'blue-600';

  private static $colorMap = [
    '#AC725E' => 'red-800',
    '#D06B64' => 'red-500',
    '#F83A22' => 'red-600',
    '#FA573C' => 'orange-600',
    '#FF7537' => 'orange-500',
    '#FFAD46' => 'teal-500',
    '#42D692' => 'green-700',
    '#16A765' => 'green-600',
    '#7BD148' => 'green-400',
    '#B3DC6C' => 'yellow-400',
    '#FBE983' => 'teal-400',
    '#92E1C0' => 'blue-300',
    '#9FE1E7' => 'blue-400',
    '#9FC6E7' => 'blue-600',
    '#4986E7' => 'indigo-500',
    '#9A9CFF' => 'indigo-600',
    '#B99AFF' => 'gray-500',
    '#C2C2C2' => 'gray-600',
    '#CABDBF' => 'orange-400',
    '#CCA6AC' => 'yellow-700',
    '#F691B2' => 'pink-400',
    '#CD74E6' => 'purple-300',
    '#A47AE2' => 'purple-500',
  ];

  /**
   * Returns a Tailwind class from a color.
   *
   * @todo improve this mapping, perhaps set a map definition
   *   that can be used by color field to resolve this.
   * @see https://tailwindcss.com/docs/customizing-colors/#default-color-palette
   *
   * @param string $color
   *   Hexadecimal color value.
   *
   * @return string
   *   Tailwind class.
   */
  public function getTailwindClass($color) {
    if (!empty($color) && array_key_exists($color, static::$colorMap)) {
      return static::$colorMap[$color];
    }
    else {
      return static::$fallbackColor;
    }
  }

  /**
   * Returns a Tailwind class that has a valid a11y contrast for a color.
   *
   * @param string $color
   *   Hexadecimal color value.
   *
   * @return string
   *   Tailwind class.
   */
  public function getTailwindContrastClass($color) {
    // @todo
    return 'white';
  }

}
