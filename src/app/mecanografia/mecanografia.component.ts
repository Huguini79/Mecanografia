import { Component, OnInit } from '@angular/core';

@Component
({
    selector: 'app-mecanografia',
    templateUrl: 'mecanografia.html',
    styleUrl: '../app.css'
})

export class Mecanografia 
{
    frase_original = "ffffaaaaffffssss";
    frase = this.frase_original;
    frase1 = "hhhhkkkkkkkk123";
    frase2 = "Hola Mundo!";
    frase_array: any = 
    [

    ];
    current_pos = 0;
    current_pos_phrase = 0;
    max_pos_phrase = 2;

    ngOnInit()
    {
        this.rellenarArray();
    }

    rellenarArray()
    {
        this.frase_array = [];
        for (var i = 0; i < this.frase.length; ++i)
        {
            this.frase_array.push({char: this.frase[i], complete: false});
        }
    }

    teclaPresionada(event: KeyboardEvent): void
    {
        if (event.key != "Shift")
        {
            if (event.key == this.frase[this.current_pos])
            {
                this.frase_array[this.current_pos].complete = true;
                this.current_pos++;

            } else
            {
                if (event.key == "Backspace")
                {
                    if (this.current_pos != 0)
                    {
                        this.current_pos--;
                    }

                    this.frase_array[this.current_pos].complete = false;
                
                } else
                {
                    this.frase_array[this.current_pos].complete = null;
                    this.current_pos++;
                }
            }
        
        }
    }

    Anterior()
    {
        if (this.current_pos_phrase != 0)
        {
            this.current_pos_phrase--;
        }

        if (this.current_pos_phrase == 0)
        {
            this.frase = this.frase_original;
            this.current_pos = 0;
            this.rellenarArray();

        } else if (this.current_pos_phrase == 1)
        {
            this.frase = this.frase1;
            this.current_pos = 0;
            this.rellenarArray();

        } else if (this.current_pos_phrase == 2)
        {
            this.frase = this.frase2;
            this.current_pos = 0;
            this.rellenarArray();
        }
    }

    Siguiente()
    {
        if (this.current_pos_phrase != this.max_pos_phrase)
        {
            this.current_pos_phrase++;
        }
        if (this.current_pos_phrase == 1)
        {
            this.frase = this.frase1;
            this.current_pos = 0;
            this.rellenarArray();

        } else if (this.current_pos_phrase == 2)
        {
            this.frase = this.frase2;
            this.current_pos = 0;
            this.rellenarArray();
        }
    }
}