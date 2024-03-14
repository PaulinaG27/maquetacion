import React from 'react'
import SidebarLink from './SidebarLink'

const Sidebar = () => {
  return (
    <aside
        className='w-80 bg-[#CFD1E0]
        flex flex-col
        justify-between items-center'   
    >

        <div className='mt-6 flex flex-col justify-center items-center gap-4'>
            <div className='w-[130px] h-[130px] bg-white rounded-full'>
            </div>

            <div className='font-bold text-black text-[20px]'>Gestionar vuelos</div>
            <SidebarLink buttonName='Ver vuelos' url='/dashboard/see-flights'/>
            <SidebarLink buttonName='Crear nuevo vuelo' url='/dashboard/new-flight'/>


        </div>

        <div className='mb-10 mt-6 flex flex-col justify-center items-center gap-4'>
            <SidebarLink buttonName='Perfil' url='/'/>
            <SidebarLink buttonName='Cerrar sesión' url='/'/>
        </div>


    </aside>
  )
}

export default Sidebar