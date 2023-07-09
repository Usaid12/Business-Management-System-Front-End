import { Btn, H6, Image } from '../../AbstractElements';


// const [product,setProduct]=useState([])
const style = {
  width: 40,
  height: 40
};

const style2 = { width: 70, fontSize: 14, padding: 3 };

export const productData = [
  {
    
  }
];
export const productColumns = [

  {
    name: 'Name',
    // selector: (row) => row.name,
    sortable: true,
    center: true,
    wrap: true
  },
  {
    name: 'Description',
    // selector: (row) => row.description,
    sortable: true,
    center: true,
  },
  
  {
    name: 'Start date',
    // selector: (row) => row.start_date,
    sortable: true,
    center: true,
  },
  {
    name: 'Action',
    // selector: (row) => row.action,
    sortable: true,
    center: true,
  },
];















// // image: <Image attrImage={{ src: product1, style: style, alt: '' }} />,
// Details: <div>
// <H6>Men's T-shirt</H6>
// <span>Vida Loca - Gray Checks Fit Men's Casual Shirt.</span>
// </div>,
// amount: '$10',
// stock: <div className='font-success'>In Stock</div>,
// start_date: '2023/4/19',
// action:
// <div>
// <span>
// <Btn attrBtn={{ style: style2, className: 'btn btn-danger btn-xs', color: 'danger', type: 'button' }}>Delete</Btn>
// </span>
// <span>
// <Btn attrBtn={{ style: style2, className: 'btn btn-primary btn-xs ms-2', color: 'primary' , type: 'button' }}>Edit </Btn>
// </span>
// </div >
// },
// {
// image: <Image attrImage={{ src: product2, style: style, alt: '' }} />,
// Details: <div>
// <H6>Yellow Plain T-shirt</H6>
// <span>Wild West - Yellow Cotton Blend Regular Fit Men's Formal T-Shirt.</span>
// </div>,
// amount: '$10',
// stock: <div className='font-danger'>Out of Stock</div>,
// start_date: '2023/4/19',
// action:
// <div>
// <span>
// <Btn attrBtn={{ style: style2, className: 'btn btn-danger btn-xs', color: 'danger', type: 'button' }}>Delete</Btn>
// </span>
// <span>
// <Btn attrBtn={{ style: style2, className: 'btn btn-primary btn-xs ms-2', color: 'primary' , type: 'button' }}>Edit </Btn>
// </span>
// </div >
// },
// {
// image: <Image attrImage={{ src: product3, style: style, alt: '' }} />,
// Details: <div>
// <H6>Blackish Top</H6>
// <span>aask - Black Polyester Blend Women's Fit & Flare T-shirt.</span>
// </div>,
// amount: '$10',
// stock: <div className='font-danger'>Out of Stock</div>,
// start_date: '2023/4/19',
// action: <div>
// <span>
//   <Btn attrBtn={{ style: style2, className: 'btn btn-danger btn-xs', color: 'danger', type: 'button' }}>Delete</Btn>
// </span>
// <span>
//   <Btn attrBtn={{ style: style2, className: 'btn btn-primary btn-xs ms-2', color: 'primary' , type: 'button' }}>Edit </Btn>
// </span>
// </div >
// },
// {
// image: <Image attrImage={{ src: product4, style: style, alt: '' }} />,
// Details: <div>
// <H6>Brown Casual Shirt</H6>
// <span>R L F - Brown Cotton Blend Men's A-Line Shirt.</span>
// </div>,
// amount: '$20',
// stock: <div className='font-primary'>Low Stock</div>,
// start_date: '2023/4/19',
// action: <div>
// <span>
//   <Btn attrBtn={{ style: style2, className: 'btn btn-danger btn-xs', color: 'danger', type: 'button' }}>Delete</Btn>
// </span>
// <span>
//   <Btn attrBtn={{ style: style2, className: 'btn btn-primary btn-xs ms-2', color: 'primary' , type: 'button' }}>Edit </Btn>
// </span>
// </div >
// },
// {
// image: <Image attrImage={{ src: product5, style: style, alt: '' }} />,
// Details: <div>
// <H6>Black & white Dress</H6>
// <span>Womens's Black & White Top Collection Dress.</span>
// </div>,
// amount: '$30',
// stock: <div className='font-success'>In Stock</div>,
// start_date: '2023/4/19',
// action: <div>
// <span>
//   <Btn attrBtn={{ style: style2, className: 'btn btn-danger btn-xs', color: 'danger', type: 'button' }}>Delete</Btn>
// </span>
// <span>
//   <Btn attrBtn={{ style: style2, className: 'btn btn-primary btn-xs ms-2', color: 'primary' , type: 'button' }}>Edit </Btn>
// </span>
// </div >
// },
// {
// image: <Image attrImage={{ src: product6, style: style, alt: '' }} />,
// Details: <div>
// <H6>Red Blazer For Winter.</H6>
// <span>Womens's Red Winter Season Collection Blazer.</span>
// </div>,
// amount: '$40',
// stock: <div className='font-success'>In Stock</div>,
// start_date: '2023/4/19',
// action: <div>
// <span>
//   <Btn attrBtn={{ style: style2, className: 'btn btn-danger btn-xs', color: 'danger', type: 'button' }}>Delete</Btn>
// </span>
// <span>
//   <Btn attrBtn={{ style: style2, className: 'btn btn-primary btn-xs ms-2', color: 'primary' , type: 'button' }}>Edit </Btn>
// </span>
// </div >
// },
// {
// image: <Image attrImage={{ src: product2, style: style, alt: '' }} />,
// Details: <div>
// <H6>Yellow Plain T-shirt</H6>
// <span>Wild West - Yellow Cotton Blend Regular Fit Men's Formal T-Shirt.</span>
// </div>,
// amount: '$10',
// stock: <div className='font-success'>In Stock</div>,
// start_date: '2023/4/19',
// action: <div>
// <span>
//   <Btn attrBtn={{ style: style2, className: 'btn btn-danger btn-xs', color: 'danger', type: 'button' }}>Delete</Btn>
// </span>
// <span>
//   <Btn attrBtn={{ style: style2, className: 'btn btn-primary btn-xs ms-2', color: 'primary' , type: 'button' }}>Edit </Btn>
// </span>
// </div >
// },
// {
// image: <Image attrImage={{ src: product3, style: style, alt: '' }} />,
// Details: <div>
// <H6>Blackish Top</H6>
// <span>aask - Black Polyester Blend Women's Fit & Flare T-shirt.</span>
// </div>,
// amount: '$10',
// stock: <div className='font-success'>In Stock</div>,
// start_date: '2023/4/19',
// action: <div>
// <span>
//   <Btn attrBtn={{ style: style2, className: 'btn btn-danger btn-xs', color: 'danger', type: 'button' }}>Delete</Btn>
// </span>
// <span>
//   <Btn attrBtn={{ style: style2, className: 'btn btn-primary btn-xs ms-2', color: 'primary' , type: 'button' }}>Edit </Btn>
// </span>
// </div >