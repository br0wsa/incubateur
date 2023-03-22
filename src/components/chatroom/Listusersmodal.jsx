import React from "react";
import Logo from '../../assets/images/Logo.svg';
import Medal from '../../assets/images/Medal.svg';
import Close from '../../assets/images/Close.svg';
import Userlist from "./Userlist";
// import { } from '@heroicons/react/solid'
function UsersModal({ isOpen, setIsOpen }) {
    console.log({ isOpen, setIsOpen });

    return (

        <>
{/* Fond sombre qui s'affiche en arrière-plan */}
            <div className={`${isOpen ? "block" : "hidden"} fixed z-10 inset-0 overflow-y-auto`}>
                <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 transition-opacity" aria-hidden="true" onClick={UsersModal}>
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
                                <button className="ml-auto" onClick={() => setIsOpen(false)}>
                                    <img className='h-6 w-6' src={Close} alt="close" />
                                </button>
                            </div>

{/* Contenu du modal */}
                            <div className="mt-3 bg-shark-gris">
                                <div className="mt-3">
                                    <div className="bg-shark shadow-md rounded-lg px-4  py-4">

                                        <p className="text-shark-text mt-2 p-2"> Description de la Card</p>

                                        <div className="flex justify-around bg-shark-bg border-b-2 ">

                                            <div className="flex rounded-full bg-white m-2">
                                                <img src={Logo} alt="img-profil" />
                                            </div>

                                            <div className=" m-2">
                                                <p className="pt-2 text-xl ">Pseudo</p>
                                            </div>
                                            <div className=" bg-shark-900 m-2">
                                                <img className="pt-2 text-xl " src={Medal} alt="" />
                                            </div>

                                        </div>
                                        <Userlist />

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

export default UsersModal;
