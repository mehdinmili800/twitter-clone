import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{

  constructor(){}

  ngOnInit(): void {
      
  const exampleText: string[] = ['Developer', 'Designer', 'Author'];
  const exampleTyping = new AutoTyping('#text', exampleText, {
    typeSpeed: 100,
    deleteSpeed: 100,
    waitBeforeDelete: 2000,
    waitBetweenWords: 500,
  });
  
  exampleTyping.start();
  
  }
}


interface AutoTypingOptions {
  typeSpeed?: number;
  deleteSpeed?: number;
  waitBeforeDelete?: number;
  waitBetweenWords?: number;
  writeWhole?: boolean;
}

class AutoTyping {
  private selector: string;
  private text: string[];
  private typeSpeed: number;
  private deleteSpeed: number;
  private waitBeforeDelete: number;
  private waitBetweenWords: number;
  private writeWhole: boolean;
  private el: HTMLElement | null;

  constructor(selector: string, text: string[], options: AutoTypingOptions = {}) {
    this.selector = selector;
    this.text = text;
    this.typeSpeed = options.typeSpeed || 150;
    this.deleteSpeed = options.deleteSpeed || 150;
    this.waitBeforeDelete = options.waitBeforeDelete || 1000;
    this.waitBetweenWords = options.waitBetweenWords || 1000;
    this.writeWhole = options.writeWhole || false;
    this.el = document.querySelector(selector);
  }

  public async start(): Promise<void> {
    if (!this.el) return;
    
    for (let i = 0; i < this.text.length; i++) {
      const item = this.text[i];
      let characters = item.split("");
      if (this.writeWhole) characters = [item];
      await this.writeText(characters);
      if (i === this.text.length - 1) i = -1;
    }
  }

  private writeText(characters: string[]): Promise<void> {
    return new Promise((resolve) => {
      if (!this.el) return;
      let isSpace = false;
      const interval = setInterval(() => {
        let char = characters.shift();
        if (isSpace) {
          isSpace = false;
          char = " " + char;
        }
        isSpace = char === " ";
        this.el!.innerText += char;
        if (characters.length === 0) {
          clearInterval(interval);
          setTimeout(() => {
            const deleteInterval = setInterval(() => {
              const currentText = this.el!.innerText;
              if (this.writeWhole) {
                this.el!.innerText = "";
              } else {
                this.el!.innerText = currentText.substr(0, currentText.length - 1);
              }
              if (this.el!.innerText.length === 0) {
                clearInterval(deleteInterval);
                setTimeout(() => resolve(), this.waitBetweenWords);
              }
            }, this.deleteSpeed);
          }, this.waitBeforeDelete);
        }
      }, this.typeSpeed);
    });
  }
}