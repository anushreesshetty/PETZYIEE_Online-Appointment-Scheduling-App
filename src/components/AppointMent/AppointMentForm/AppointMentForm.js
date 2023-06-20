import React, { useContext } from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { AuthContext } from '../../Context/AuthContext';
import swal from 'sweetalert';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
Modal.setAppElement('#root')

const AppointMentForm = ({ modalIsOpen, appointMentDate, closeModal, date }) => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const { user } = useContext(AuthContext);
    const { data, loading, error } = useFetch(`${baseUrl}/auth/user`);
    const { register, handleSubmit, errors } = useForm()
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        // data.appointmantDate = date;
        // data.serviceTitle = appointMentDate;
        // data.user_id = user._id;
        try {
            await axios.post(`${baseUrl}/auth/addAppointMent`, data)
            closeModal();
            swal({
                icon: 'success',
                text: 'Successfully Appointment Submited',
                timer: 23
            })
            navigate("/");
        }
        catch (err) {
            console.log(err)
        }
    }
    return (

        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <FontAwesomeIcon icon={faWindowClose} onClick={closeModal} className="m-2 text-primary" />
                <h1 className="text-center text-black">Pet-Services.</h1>
                <p className="text-secondary text-center"> On {date.toDateString()}</p>
                <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mb-2">
                        <input type="text" {...register("username", { required: true })} name="username" placeholder="Your Name" className="form-control" />
                    </div>
                    <div className="form-group mb-2">
                        <input type="text" {...register("phone", { required: true })} name="phone" placeholder="Phone Number" className="form-control" />
                    </div>
                    <div className="form-group mb-2">
                        <input type="text" {...register("email", { required: true })} name="email" placeholder="Email" className="form-control" />
                    </div>
                    <div className="form-group mb-2">
                        <input {...register("age", { required: true })} className="form-control" name="pettype" placeholder="Pet Type" type="text" />
                    </div>
                    <div className="form-group mb-2">
                        <input {...register("age", { required: true })} className="form-control" name="petbreed" placeholder="Pet Breed" type="text" />
                    </div>


                    <div className="form-group row">
                        <div className="mb-2">
                            <select className="form-control" name="gender"  {...register("services", { required: true })}>
                                <option value="Not set">Select Service</option>
                                <option value="Male">Pet Boarding</option>
                                <option value="Female">Play Date</option>
                                <option value="Not set">Pet Sitting</option>
                                <option value="Not set">Pet Day Care</option>
                                <option value="Not set">Pet Grooming</option>
                                <option value="Not set">Pet Training</option>
                            </select>
                        </div>


                  
                    <div className="form-group row">
                        <div className="mb-2">
                            <select className="form-control" name="slot"  {...register("slot", { required: true })}>
                                <option value="Not set">Select Slot</option>
                                <option value="Male">10-11 am</option>
                                <option value="Female">11-12 am</option>
                                <option value="Not set">12-1 pm</option>
                                <option value="Not set">2-3 pm</option>
                                <option value="Not set">3-4 pm</option>
                                <option value="Not set">4-5 pm</option>
                            </select> 
                        </div>
                        </div>

                    <div className="form-group text-right mt-2">
                        <button type="submit" className="btn btn-white bg-black">Send</button>
                    </div>
                    </div>
                </form>


            </Modal>

        </div>
    );
};

export default AppointMentForm;