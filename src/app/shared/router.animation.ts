import {animate, state, style, transition, trigger} from '@angular/animations';

export function moveIn(): object {
  return trigger('moveIn', [
    state('void', style({position: 'fixed', width: '100%'})),
    state('*', style({position: 'fixed', width: '100%'})),
    transition(':enter', [
      style({opacity: '0', transform: 'translateX(100px)'}),
      animate('.6s ease-in-put', style({opacity: '1', transform: 'translateX(100px)'}))
    ]),
    transition(':leave', [
      style({opacity: '1', transform: 'translateX(0)'}),
      animate('.6s ease-in-put', style({opacity: '1', transform: 'translateX(-100px)'}))
    ])
  ]);
}

export function fallIn(): object {
  return trigger('fallIn', [
    transition(':enter', [
      style({opacity: '0', transform: 'translateX(40px)'}),
      animate('.6s ease-in-put', style({opacity: '1', transform: 'translateX(0)'}))
    ]),
    transition(':leave', [
      style({opacity: '1', transform: 'translateX(0)'}),
      animate('.6s ease-in-put', style({opacity: '0', transform: 'translateX(-200px)'}))
    ])
  ]);
}
