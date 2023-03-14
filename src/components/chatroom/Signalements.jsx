import React from 'react';
import Close from '../../assets/images/Close.svg';


function Signalements({openSignal, setOpenSignal}) {
    console.log({openSignal, setOpenSignal });

    return (
        <div className={`${openSignal ? "block" : "hidden"} fixed z-10 inset-0 overflow-y-auto`}>
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-75">
                    </div>
                </div>
                {/* Contenu du modal */}
                <div
                    className=" inline-block align-bottom  bg-shark-900 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-headline">
                    <div className="text-shark-900 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        {/* Titre du modal */}
                        <div className="sm:flex sm:items-start">
                            <h3 className="text-shark-text text-lg leading-6 font-medium" id="modal-headline">
                                Liste utilisateur
                            </h3>
                            {/* Bouton de fermeture du modal */}
                            <button className="ml-auto" onClick={() => setOpenSignal(false)}>
                                <img className='h-6 w-6' src={Close} alt="close" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
};

export default Signalements;