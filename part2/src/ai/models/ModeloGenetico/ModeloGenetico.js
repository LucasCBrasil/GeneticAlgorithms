import Model from '../Model';

export default class ModeloGenetico extends Model {

    select(cromossomos) {
        const pais = [cromossomos[0], cromossomos[1]];
        return pais;
    }

    crossover(pais, cromossomos){
        const descendente1 = pais[0];
        const descendente2 = pais[1];

        const pontoDeCrossover = Math.floor(Math.random() * descendente1.length);

        for(let i = 0; i < pontoDeCrossover; i++){
            const aux = descendente1[i];
            descendente1[i] = descendente2[i];
            descendente2[i] = aux;
        }

        const descendentes = [descendente1, descendente2];

        for(let i = 0; i < 2; i++){
            cromossomos[cromossomos.length - i - 1] = descendentes[i];   
        }

        return descendentes;
    }

    mutate(cromossomos){
        cromossomos.forEach(cromossomo => {
            const pontoDeMutacao = Math.floor(Math.random() * cromossomos.length);
            cromossomo[pontoDeMutacao] = Math.random();            
        });
    }

    train(cromossomos){
        const pais = this.select(cromossomos); 
        const descendentes = this.crossover(pais, cromossomos);
        return this.mutate(descendentes);
    }

    fit(cromossomos){
        this.train(cromossomos);
    }
}