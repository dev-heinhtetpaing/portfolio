import { useAppDispatch } from './hook';

import {useInView} from "react-intersection-observer"
import { useEffect } from 'react'
import { setAcitveSection } from '../features/active_section/activeSectionSlice'

export const useActiveSection=(section:string,thresdhold:number=5)=>{
    const dispatch=useAppDispatch()
    const {ref,inView}=useInView({threshold:thresdhold})
    useEffect(()=>{
        if(inView){
            dispatch(setAcitveSection(section))
        }
    },[inView,section,dispatch])
    return {ref}
    }