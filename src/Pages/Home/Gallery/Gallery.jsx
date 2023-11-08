import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// If you want you can use SCSS instead of css
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

function Gallery() {
    const onInit = () => {
        // console.log('lightGallery has been initialized');
    };
    return (
            <div className='bg-[#dbb878] py-20 overflow-hidden '>
                <div className='max-w-6xl mx-auto text-center'>
                <h3 className="font-semibold text-4xl mb-5 text-[#E14D2A]">Watch out our Gallery</h3>
                <p className='text-xl max-w-[500px] mx-auto mb-16'>"Discover the essence of our hotel through the lens. Let the pictures tell the story of your unforgettable stay."</p>
                </div>
                <div className="App grid grid-cols-3 gap-2">
                {/* <div className=''>
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]
                }
            
            >

<img src="https://i.ibb.co/TgZ6gdn/140127103345-peninsula-shanghai-deluxe-mock-up.jpg" alt="140127103345-peninsula-shanghai-deluxe-mock-up" border="0"></img>


              
               <a href="https://i.ibb.co/TgZ6gdn/140127103345-peninsula-shanghai-deluxe-mock-up.jpg">
                    <img alt="img1" src="https://i.ibb.co/TgZ6gdn/140127103345-peninsula-shanghai-deluxe-mock-up.jpg" className=' mx-auto' />
                </a>
            </LightGallery>
            </div> */}
                <div className=''>
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]
                }
            
            >
              
               <a href="https://i.ibb.co/Ln3RkQC/pexels-pixabay-237371.jpg">
                    <img alt="img1" src="https://i.ibb.co/Ln3RkQC/pexels-pixabay-237371.jpg" className=' mx-auto' />
                </a>
            </LightGallery>
            </div>
                <div className=''>
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]
                }
            
            >
              
               <a href="https://i.ibb.co/G3j1Mmp/pexels-pixabay-210265.jpg">
                    <img alt="img1" src="https://i.ibb.co/G3j1Mmp/pexels-pixabay-210265.jpg" className=' mx-auto' />
                </a>
            </LightGallery>
            </div>
                <div className=''>
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]
                }
            
            >
              
               <a href="https://i.ibb.co/QCWYXNV/pexels-dada-design-12289353.jpg">
                    <img alt="img1" src="https://i.ibb.co/QCWYXNV/pexels-dada-design-12289353.jpg" className=' mx-auto' />
                </a>
            </LightGallery>
            </div>
                <div className=''>
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]
                }
            
            >
              
               <a href="https://i.ibb.co/G3j1Mmp/pexels-pixabay-210265.jpg">
                    <img alt="img1" src="https://i.ibb.co/G3j1Mmp/pexels-pixabay-210265.jpg" className=' mx-auto' />
                </a>
            </LightGallery>
            </div>
                <div className=''>
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]
                }
            
            >
              
               <a href="https://i.ibb.co/G3j1Mmp/pexels-pixabay-210265.jpg">
                    <img alt="img1" src="https://i.ibb.co/G3j1Mmp/pexels-pixabay-210265.jpg" className=' mx-auto' />
                </a>
            </LightGallery>
            </div>
                <div className=''>
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]
                }
            
            >
              
               <a href="https://i.ibb.co/QCWYXNV/pexels-dada-design-12289353.jpg">
                    <img alt="img1" src="https://i.ibb.co/QCWYXNV/pexels-dada-design-12289353.jpg" className=' mx-auto' />
                </a>
            </LightGallery>
            </div>
                <div className=''>
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]
                }
            
            >
              
               <a href="https://i.ibb.co/Ln3RkQC/pexels-pixabay-237371.jpg">
                    <img alt="img1" src="https://i.ibb.co/Ln3RkQC/pexels-pixabay-237371.jpg" className=' mx-auto' />
                </a>
            </LightGallery>
            </div>
            <div className=''>
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]
                }
            
            >
              
               <a href="https://i.ibb.co/QCWYXNV/pexels-dada-design-12289353.jpg">
                    <img alt="img1" src="https://i.ibb.co/QCWYXNV/pexels-dada-design-12289353.jpg" className=' mx-auto' />
                </a>
            </LightGallery>
            </div>
                <div className=''>
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]
                }
            
            >
              
               <a href="https://i.ibb.co/TgZ6gdn/140127103345-peninsula-shanghai-deluxe-mock-up.jpg">
                    <img alt="img1" src="https://i.ibb.co/TgZ6gdn/140127103345-peninsula-shanghai-deluxe-mock-up.jpg" className=' mx-auto' />
                </a>
            </LightGallery>
            </div>
           
          
        </div>
            </div>
    );
}
export default Gallery;