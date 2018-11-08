import {animate, state, style, transition, trigger} from '@angular/animations'

export let fundido = 
    trigger('fadeIn', [
        transition(':enter', [
            style({
                opacity: 0,
                transform: 'translateY(-15%)'
            }),
            animate('300ms linear', 
            style({
                opacity: 1,
                transform: 'translateY(0)'
            }))
        ]),
    ]);