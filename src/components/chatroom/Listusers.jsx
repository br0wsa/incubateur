import React from "react";

function Modal({ open, onClose }) {
    return (
        <>
            {/* Fond sombre qui s'affiche en arrière-plan */}
            <div className={`${open ? "block" : "hidden"} fixed z-10 inset-0 overflow-y-auto`}>
                <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 transition-opacity" aria-hidden="true" onClick={onClose}>
                        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>

                    {/* Contenu du modal */}
                    <div
                        className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-headline">
                        <div className="text-shark-900 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                               
                                {/* Titre du modal */}
                                <h3 className="text-lg leading-6 font-medium text-shark-900" id="modal-headline">
                                    Liste utilisateur
                                </h3>

                                {/* Bouton de fermeture du modal */}
                                <button className="ml-auto" onClick={onClose}>
                                    <svg
                                        className="w-6 h-6 text-gray-700 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M6.41 7.41a1.5 1.5 0 0 1 2.12 0L12 10.88l3.47-3.47a1.5 1.5 0 1 1 2.12 2.12L14.12 13l3.47 3.47a1.5 1.5 0 0 1-2.12 2.12L12 15.12l-3.47 3.47a1.5 1.5 0 0 1-2.12-2.12L9.88 13 6.41 9.53a1.5 1.5 0 0 1 0-2.12z" />
                                    </svg>
                                </button>
                            </div>

                            {/* Contenu du modal */}
                            <div className="mt-3 bg-shark-gris">
                                <div className="mt-3">
                                    <div className="bg-shark shadow-md rounded-lg px-4 py-4">
                                        <h2 className="text-xl font-bold text-shark-900 mt-4">
                                            Utilisateur connecter
                                        </h2>
                                        <p className="text-shark-text mt-2">
                                            Description de la Card
                                        </p>
                                        <img className="w-full rounded-lg" src="https://via.placeholder.com/640x360.png?text=Image+du+produit" alt="Image du produit"/>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;
