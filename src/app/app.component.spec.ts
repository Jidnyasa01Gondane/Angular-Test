import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('AppComponent', () => {
  let debugElement: DebugElement;
  let htmlelement: HTMLElement;

  let component: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
   
  }));

  beforeEach(() => {
    let fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.css('#id'));
    htmlelement = debugElement.nativeElement;
    fixture.detectChanges();
  }
  )


  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
it('sum 5,7 should return 12', async(()=> {
  const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.sum(5,7)).toEqual(12);
}
))
  it(`should have as title 'newtestapp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('newtestapp');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to newtestapp!');
  });

  it('should store 10 as value in varaible', () => {
    htmlelement.click();
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    expect(component.result).toEqual(10);
    
  });
});
