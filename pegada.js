function calcularPegadaDeCarbono(meioTransporte, horasTransporte, transportePublico, pessoasCasa, tipoAlimentacao) {
    let pegadaTransporteIndividual = 0;
    let pegadaTransportePublico = 0;
    let pegadaAlimentacao = 0;
  
    switch (meioTransporte) {
      case 'carro':
        pegadaTransporteIndividual = 0.28; 
        break;
      case 'moto':
        pegadaTransporteIndividual = 0.18; 
        break;
      case 'bicicleta':
        pegadaTransporteIndividual = 0; 
        break;

    }
    if (transportePublico) {
      pegadaTransportePublico = 1.28; 
    }

    switch (tipoAlimentacao) {
      case 'carnivoro':
        pegadaAlimentacao = 3.3; 
        break;
      case 'vegetariano':
        pegadaAlimentacao = 1.9; 
        break;
      case 'vegano':
        pegadaAlimentacao = 1.5; 
        break;
    }

    const pegadaFinal = pessoasCasa * pegadaAlimentacao
  
    const pegadaTotal = (pegadaTransporteIndividual * horasTransporte) + (pegadaTransportePublico * horasTransporte) +  pegadaFinal;
  
    return pegadaTotal;
  }
    