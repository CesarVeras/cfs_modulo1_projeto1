import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroMedicamentoComponent } from './cadastro-medicamento.component';

describe('CadastroMedicamentoComponent', () => {
  let component: CadastroMedicamentoComponent;
  let fixture: ComponentFixture<CadastroMedicamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroMedicamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroMedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
