<?php

namespace Drupal\entity_redirect\EventSubscriber;

use Drupal\Core\Cache\CacheableRedirectResponse;
use Drupal\Core\Url;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\RequestEvent;
use Symfony\Component\HttpKernel\KernelEvents;

/**
 * Class EntityRedirectSubscriber.
 */
class EntityRedirectSubscriber implements EventSubscriberInterface {

  /**
   * {@inheritdoc}
   */
  public static function getSubscribedEvents() {
    $events[KernelEvents::REQUEST] = ['redirect'];
    return $events;
  }

  /**
   * This method is called when the kernel.request is dispatched.
   *
   * @param \Symfony\Component\HttpKernel\Event\RequestEvent $event
   *   The dispatched event.
   */
  public function redirect(RequestEvent $event) {
    $request = $event->getRequest();
    $routeName = $request->get('_route');
    if ($routeName === 'entity.node.canonical') {
      /** @var \Drupal\node\NodeInterface $node */
      $node = $request->attributes->get('node');
      if ($node->bundle() === 'volunteer') {
        try {
          // If url fails, redirect won't happen.
          $url = Url::fromUserInput('/about');
          $response = new CacheableRedirectResponse($url->toString());
          $event->setResponse($response);
        }
        catch (\Exception $exception) {
          \Drupal::logger('entity_redirect')->error('Path not found for Volunteer redirect.');
        }
      }
    }
  }

}
