import {
  ComponentFixture,
  fakeAsync,
  TestBed
} from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { HarnessLoader } from '@angular/cdk/testing';
import { MatChipInput, MatChipRow } from '@angular/material/chips';
import { MatIcon } from '@angular/material/icon';

import { MatMenuHarness } from '@angular/material/menu/testing';
import { MatSlideToggleHarness } from '@angular/material/slide-toggle/testing';
import {
  MatSlideToggle,
  MatSlideToggleChange,
} from '@angular/material/slide-toggle';

import { MATERIAL_COLOR, LABEL_POSITION } from './core';
import { MaterialComponentsModule } from './material';
import { NgxMultiKeywordsHighlighterComponent } from './ngx-multi-keywords-highlighter.component';
import { NgxMultiKeywordsHighlighterModule } from './ngx-multi-keywords-highlighter.module';
import { NgxMultiKeywordsHighlighterService } from './ngx-multi-keywords-highlighter.service';

import {
  generateKeyword,
} from '../../utilities';


describe('NgxMultiKeywordsHighlighterComponent', () => {
  let component: NgxMultiKeywordsHighlighterComponent;
  let fixture: ComponentFixture<NgxMultiKeywordsHighlighterComponent>;
  let service: NgxMultiKeywordsHighlighterService;

  let loader: HarnessLoader;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialComponentsModule,
        NgxMultiKeywordsHighlighterComponent,
        NgxMultiKeywordsHighlighterModule.forRoot({
          themeColor: MATERIAL_COLOR.ACCENT,
          enableToggleLabel: true,
          toggleLabelPosition: LABEL_POSITION.AFTER,
          enableHighlighterTooltip: 'OPEN/CLOSE',
          linkToCopyright: true,
          minWidth: 320,
        }),
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(NgxMultiKeywordsHighlighterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(NgxMultiKeywordsHighlighterService);
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(service).toBeDefined();
  });

  it('should openMenu', () => {
    jest.spyOn(component.openMenu, 'emit');
    component.onOpened();
    expect(component.openMenu.emit).toHaveBeenCalledWith(true);
  });

  it('should openMenu when click on the icon button', () => {
    jest.spyOn(component.openMenu, 'emit');
    jest.spyOn(component, 'onOpened');

    component.menuTrigger.openMenu();
    fixture.detectChanges();

    expect(component.onOpened).toHaveBeenCalledTimes(1);
    expect(component.openMenu.emit).toHaveBeenCalledWith(true);
  });

  it('should closeMenu', () => {
    jest.spyOn(component.closeMenu, 'emit');
    component.onClosed();
    expect(component.closeMenu.emit).toHaveBeenCalledWith(true);
  });

  it('should closeMenu when click on the icon button', () => {
    jest.spyOn(component.closeMenu, 'emit');
    jest.spyOn(component, 'onClosed');

    component.menuTrigger.openMenu();
    fixture.detectChanges();

    component.menuTrigger.closeMenu();
    fixture.detectChanges();

    expect(component.onClosed).toHaveBeenCalledTimes(1);
    expect(component.closeMenu.emit).toHaveBeenCalledWith(true);
  });

  xit('should toggle the checkbox', fakeAsync(() => {
    // const onToggleSpy = jest.spyOn(component, 'onToggle');
    // const onServiceToggleHighlightStatusSpy = jest.spyOn(
    //   service,
    //   'toggleHighlightStatus'
    // );
    // const onServiceToggleHighlighterSpy = jest.spyOn(
    //   service,
    //   'toggleHighlighter'
    // );
    // const onHighlightedSpy = jest.spyOn(component.highlighted, 'emit');
    // let isChecked = false;

    // component.menuTrigger.openMenu();
    // fixture.detectChanges();

    // const highlightKeywordsMenu = await loader.getHarness(MatMenuHarness);
    // const slideToggleHarness = await highlightKeywordsMenu.getHarness(
    //   MatSlideToggleHarness
    // );
    // const slideToggle = fixture.debugElement.query(
    //   By.directive(MatSlideToggle)
    // ).componentInstance;

    // await slideToggleHarness.toggle();
    // fixture.detectChanges();
    // isChecked = await slideToggleHarness.isChecked();
    // expect(onToggleSpy).toHaveBeenCalled();
    // expect(isChecked).toBe(true);
    // expect(onToggleSpy).toHaveBeenCalledWith(
    //   new MatSlideToggleChange(slideToggle, isChecked)
    // );
    // expect(onServiceToggleHighlightStatusSpy).toHaveBeenCalledWith(isChecked);
    // expect(onServiceToggleHighlighterSpy).toHaveBeenCalled();
    // expect(onHighlightedSpy).toHaveBeenCalledWith(isChecked);
    // expect(component.config.themeColor).toBe(MATERIAL_COLOR.ACCENT);

    // await slideToggleHarness.toggle();
    // fixture.detectChanges();
    // isChecked = await slideToggleHarness.isChecked();
    // expect(isChecked).toBe(false);
    // expect(onToggleSpy).toHaveBeenCalledWith(
    //   new MatSlideToggleChange(slideToggle, isChecked)
    // );
    // expect(onServiceToggleHighlightStatusSpy).toHaveBeenCalledWith(isChecked);
    // expect(onServiceToggleHighlighterSpy).toHaveBeenCalled();
    // expect(onHighlightedSpy).toHaveBeenCalledWith(isChecked);
    // BUG: should be MATERIAL_COLOR.PRIMARY, due to the config is readonly, the themeColor cannot be overwrite.
    // expect(component.config.themeColor).toBe(MATERIAL_COLOR.PRIMARY);
  }));

  it('should track by Id', () => {
    const keyword = generateKeyword();
    expect(component.trackById(keyword.id || 0, keyword)).toBe(keyword.id);
  });

  it('should track by undefined if there is no id', () => {
    const keyword = generateKeyword();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id: _, ...keywordWithoutId } = keyword;
    expect(component.trackById(keyword.id || 0, keywordWithoutId)).toBeUndefined();
  });

  it('should add keyword', () => {
    const addKeywordSpy = jest.spyOn(component, 'addKeyword');
    const outputSpy = jest.spyOn(component.keywordListOutput, 'emit');
    const serviceSpy = jest.spyOn(service, 'addKeyword');

    const keyword = generateKeyword();
    component.menuTrigger.openMenu();
    fixture.detectChanges();
  
    const matChipInput = fixture.debugElement.query(By.directive(MatChipInput));
    matChipInput.nativeElement.focus();
    matChipInput.nativeElement.value = keyword.name;
    matChipInput.nativeElement.blur();
    fixture.detectChanges();

    expect(addKeywordSpy).toHaveBeenCalled();
    expect(outputSpy).toHaveBeenCalled();
    expect(serviceSpy).toHaveBeenCalled();
  });

  it('should remove keyword', () => {
    const removeKeywordSpy = jest.spyOn(component, 'removeKeyword');
    const outputSpy = jest.spyOn(component.keywordListOutput, 'emit');
    const serviceSpy = jest.spyOn(service, 'removeKeyword');

    const keyword = generateKeyword();
    service.addKeyword(keyword);
    component.menuTrigger.openMenu();
    fixture.detectChanges();

    const matChipRow = fixture.debugElement.queryAll(By.directive(MatChipRow));
    expect(matChipRow.length).toBe(1);

    const clearButtonElement = matChipRow[0].query(By.directive(MatIcon));
    expect(clearButtonElement).toBeDefined();

    const clearButton = clearButtonElement.nativeElement as HTMLElement;
    clearButton.click();

    fixture.detectChanges();

    const expectObject = {
      id: expect.any(Number),
      color: keyword.color,
      name: keyword.name,
      createdAt: keyword.createdAt
    };

    expect(removeKeywordSpy).toHaveBeenLastCalledWith(expectObject);
    expect(serviceSpy).toHaveBeenCalledWith(expectObject);
    expect(outputSpy).toHaveBeenCalledWith(service.localKeywords);
  });

});
