import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

interface PreinterviewProps {
    datainfo: { question: string; answer: string }[];
    id?: string;
    cls?: string;
}

const Preinterview: React.FC<PreinterviewProps> = ({ datainfo, id = "preinterview", cls = "" }) => {
    return (
        <section id={id} className={`${cls} py-16 bg-gray-100`}>  
            <h2 className="text-3xl font-bold mb-4 text-center">Preinterview</h2>
            <Accordion defaultActiveKey="0">
                {datainfo.map((v, i) => (
                    <Accordion.Item eventKey={i.toString()} key={i} className="relative">
                        <Accordion.Header className="flex items-center justify-between">
                            {v.question}
                        </Accordion.Header>
                        <Accordion.Body>
                            {v.answer.split('|').map((vv, ii) => (
                                <span className="d-block" key={ii}>
                                    {vv}
                                </span>
                            ))}
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </section>
    );
};

export default Preinterview;
