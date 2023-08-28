export interface IProduct {
	id: number;
	title: string;
	image: string;
	description: string;
	price: number;
	rating: string;
	link: string;
	category: string;
}

export interface ProductProps {
	product: IProduct;
	className: string;
	// handleAddToCart: (product: IProduct) => void;
	// cartItems: IProduct[];
	// handleRemoveFromCart: (productId: number) => void;
}

// export interface ProductFilterProps {
// 	product: IProduct;
// 	handleAddToCart: (product: IProduct) => void;
// 	cartItems: IProduct[];
// 	handleRemoveFromCart: (productId: number) => void;
// }

// export interface CartProps {
// 	cartItems: IProduct[];
// 	handleAddToCart: (product: IProduct) => void;
// 	handleRemoveFromCart: (productId: number) => void;
// }

// export interface CarouseProps {
// 	product: IProduct;
// 	handleAddToCart: (product: IProduct) => void;
// 	cartItems: IProduct[];
// 	handleRemoveFromCart: (productId: number) => void;
// }
