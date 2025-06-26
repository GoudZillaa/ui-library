import React,{useEffect,useRef} from 'react'

const GradientOverlay = () => {
    const overlayRef = useRef(null);

    useEffect(()=>{
        const handleMouseMove=(e)=>{
            const x=e.clientX;
            const y=e.clientY;

            if(overlayRef.current){
                overlayRef.current.style.background=`radial-gradient(600px at ${x}px ${y}px , rgba(255,255,255 ,  0.10), transparent 80%)`
            }
        };
         window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
    },[])
  return (
     <div
      ref={overlayRef}
      style={{
        position: 'fixed',
        inset: 0, 
        zIndex: 30,
        pointerEvents: 'none',
        transition: 'background 300ms ease',
      }}
    />
  )
}

export default GradientOverlay
