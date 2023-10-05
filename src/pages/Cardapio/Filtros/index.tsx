import styles from './Filtros.module.scss';
import filtros from './filtros.json';

type Option = typeof filtros[0];

interface FiltrosProps {
    filtro: number | null,
    setFiltro: React.Dispatch<React.SetStateAction<number | null>>,
}

export default function Filtros({filtro, setFiltro}: FiltrosProps) {
    const selectFilter = (option: Option) => setFiltro(option.id); 
    
    return (
        <div className={styles.filtros}>
            { filtros.map(opcao => <button 
                    className={`${styles.filtros__filtro} ${opcao.id === filtro ? styles['filtros__filtro--ativo'] : ''}`} 
                    key={opcao.id}
                    onClick={() => selectFilter(opcao)}
                >{ opcao.label }</button>) }
        </div>
    );
}