import styles from './Filtros.module.scss';
import filtros from './filtros.json';

type Opcao = typeof filtros[0];

export default function Filtros() {
    return (
        <div className={styles.filtros}>
            { filtros.map(opcao => <button 
                    className={styles.filtros__filtro} 
                    key={opcao.id}
                >{ opcao.label }</button>) }
        </div>
    );
}