import { Component, OnInit , ChangeDetectorRef} from '@angular/core';

@Component
({
    selector: 'app-mecanografia',
    templateUrl: 'mecanografia.html',
    styleUrl: '../app.css'
})

export class Mecanografia 
{
      constructor(private ref: ChangeDetectorRef) {}
    frase_original = "ffffaaaaffffssss";
    frase = this.frase_original;
    frase1 = "hhhhkkkkkkkk123";
    frase2 = "Hola Mundo!";
    yeaah = "";
    contador = 20;

    frase_array: any = 
    [

    ];
    current_pos = 0;
    current_pos_phrase = 0;
    max_pos_phrase = 2;
    longitud_frase_actual = 0;
    correctas_de_frase_actual = 0;
    incorrectas_de_frase_actual = 0;

    ngOnInit()
    {
        this.rellenarArray();
        this.cuenta_a_atras();
    }

    rellenarArray()
    {
        this.frase_array = [];
        this.longitud_frase_actual = 0;
        this.correctas_de_frase_actual = 0;
        this.incorrectas_de_frase_actual = 0;
        for (var i = 0; i < this.frase.length; ++i)
        {
            this.longitud_frase_actual++;
            this.frase_array.push({char: this.frase[i], complete: false});
        }
    }

    cuenta_a_atras()
    {
        setInterval(() => {
            if (this.contador > 0)
            {
                this.contador--;
                this.ref.markForCheck();

            } else
            {
                if (this.correctas_de_frase_actual == this.longitud_frase_actual)
                {
                    this.yeaah = "Completado 🎉🥳🍾🥂!";
                    alert("ENHORABUENA! HAS LOGRADO COMPLETAR LA FRASE ACTUAL");
                    this.contador = 20;
                    this.ref.markForCheck();

                } else
                {
                    alert("LO SIENTO! NO HAS LOGRADO SUPERAR LA FRASE ACTUAL");
                    this.contador = 20;
                    this.correctas_de_frase_actual = 0;
                    this.incorrectas_de_frase_actual = 0;
                    var textarea = document.getElementById('textarea') as HTMLInputElement;
                    textarea.value = "";
                    this.yeaah = "";
                    this.ref.markForCheck();
                }
            }
           
        }, 1000);
        
    }

    teclaPresionada(event: KeyboardEvent): void
    {
        if (this.correctas_de_frase_actual != this.longitud_frase_actual)
        {
            if (event.key != "Shift")
            {
                if (event.key == this.frase[this.current_pos])
                {
                    this.frase_array[this.current_pos].complete = true;
                    this.current_pos++;
                    this.correctas_de_frase_actual++;

                } else
                {
                    if (event.key == "Backspace")
                    {
                        if (this.current_pos != 0)
                        {
                            this.current_pos--;
                            if (this.frase_array[this.current_pos].complete == true)
                            {
                                this.correctas_de_frase_actual--;
                            
                            }
                        }

                        this.frase_array[this.current_pos].complete = false;

                    } else
                    {
                        this.frase_array[this.current_pos].complete = null;
                        this.current_pos++;
                        this.incorrectas_de_frase_actual++;
                    }
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
            let textarea = document.getElementById('textarea') as HTMLInputElement;
            textarea.value = '';

        } else if (this.current_pos_phrase == 1)
        {
            this.frase = this.frase1;
            this.current_pos = 0;
            this.rellenarArray();
            let textarea = document.getElementById('textarea') as HTMLInputElement;
            textarea.value = '';

        } else if (this.current_pos_phrase == 2)
        {
            this.frase = this.frase2;
            this.current_pos = 0;
            this.rellenarArray();
            let textarea = document.getElementById('textarea') as HTMLInputElement;
            textarea.value = '';
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
            let textarea = document.getElementById('textarea') as HTMLInputElement;
            textarea.value = '';

        } else if (this.current_pos_phrase == 2)
        {
            this.frase = this.frase2;
            this.current_pos = 0;
            this.rellenarArray();
            let textarea = document.getElementById('textarea') as HTMLInputElement;
            textarea.value = '';
        }
    }
}
