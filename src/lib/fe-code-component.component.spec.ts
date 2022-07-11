import { ComponentFixture, TestBed } from "@angular/core/testing";

import { FeCodeComponentComponent } from "./fe-code-component.component";

describe("FeCodeComponentComponent", () => {
  let component: FeCodeComponentComponent;
  let fixture: ComponentFixture<FeCodeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeCodeComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeCodeComponentComponent);
    component = fixture.componentInstance;
    component.src = 'console.log("Hello World")';
    component.async = true;

    spyOn(console, "log").and.callFake(() => {});
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
    expect(console.log).toHaveBeenCalledWith("Hello World");
  });

  it("should be able to inject an arbitrary script", () => {
    component.src = "let v = 10; console.log(v)";
    component.ngAfterViewInit();

    expect(console.log).toHaveBeenCalledWith(10);
  });
});
