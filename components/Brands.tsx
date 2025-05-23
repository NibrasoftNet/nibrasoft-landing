import {brandList} from "../utils/constants/navLinks.tsx";
import type { BrandType } from '../utils/types/general.type.ts';

const Brands = () => {
    return (
        <ul className="grid grid-cols-1 md:grid-cols-4 w-full gap-2 items-center">
            {
                brandList.map((brand:BrandType) => (
                    <li key={brand.name} className="col-span-1 w-full flex gap-2 items-center">
                        <img src={brand.logo} alt={brand.name} />
                    </li>
                ))
            }
        </ul>
    );
};

export default Brands;