import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const AdminLayout =({children}: Props)=> {
  return(
    <div className="flex h-100">    
      <aside className="bg-slate-200 p-5 mr-5 h-100">Side Bar</aside>
      <div>{children}</div>
    </div>
  )
}

export default AdminLayout;
