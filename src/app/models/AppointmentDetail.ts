import { AnimalInformation } from "./animalInformation";
import { Appointment } from "./Appointment";

export interface AppointmentDetail{
    appointment:Appointment[];
    animalinfo:AnimalInformation[];
    
}