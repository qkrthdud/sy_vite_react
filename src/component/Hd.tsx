import React from 'react';

interface HdProps {
    id: string;
    datainfo: Array<{ label: string; path?: string; icon?: string }>;
    cls?: string;
}

const Hd: React.FC<HdProps> = ({ id, cls, datainfo }) => {
    return (
        <header id={id} className={cls}>
            <i className="header-toggle d-xl-none bi bi-list"></i>

            <nav id="navmenu" className="navmenu">
                <ul>
                  
                    {Array.isArray(datainfo) &&
                        datainfo.map((v, i) => (
                            <li key={i}>
                                <a
                                    href={v.path || "#"}
                                    className={i === 0 ? "active" : undefined}
                                >
                                    {v.icon && <i className={v.icon}></i>}
                                    <span>{v.label}</span>
                                </a>
                            </li>
                        ))
                    }
                 
                </ul>
            </nav>
        </header>
    );
};

export default Hd;