"use client"

import SearchManufacturer from "@/components/SearchManufacturer";
import React, {useState} from "react";
import Image from "next/image";
import SearchButton from "@/components/SearchButton";
import {useRouter} from "next/navigation";


const SearchBar = () => {

    const [manufacturer, setManufacturer] = useState('')
    const [model, setModel] = useState('')
    const router = useRouter()

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (manufacturer === '' && model === '') {
            return alert('Please fill in the search bar')
        }

        updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase())
    }



    // URL?make=volkswagen&tiguan
    const updateSearchParams = (model: string, manufacturer: string) => {
        // Create a new URLSearchParams object using the current URL search parameters
        const searchParams = new URLSearchParams(window.location.search);

        // Update or delete the 'model' search parameter based on the 'model' value
        if (model) {
            searchParams.set('model', model)
        } else {
            searchParams.delete('model')
        }

        // Update or delete the 'manufacturer' search parameter based on the 'manufacturer' value
        if (manufacturer) {
            searchParams.set('manufacturer', manufacturer)
        } else {
            searchParams.delete('manufacturer')
        }

        // Generate the new pathname with the updated search parameters
        const newPathname = `${window.location.pathname}?${searchParams.toString()}`

        router.push(newPathname)
    }

    return (
        <form className="searchbar" onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchManufacturer
                    manufacturer={manufacturer}
                    setManufacturer={setManufacturer}
                />
                <SearchButton otherClasses="sm:hidden"/>
            </div>
            <div className={'searchbar__item'}>
                <Image src={"/model-icon.png"} alt={'model icon'} width={25} height={25}
                       className={'absolute w-[20px] h-[20px] ml4'}/>
                <input type="text" name='model' value={model} onChange={(e) => setModel(e.target.value)}
                       placeholder={'Tiguan'} className={'search-manufacturer__input'}/>
                <SearchButton otherClasses={'sm:hidden'}/>
            </div>
            <SearchButton otherClasses={'max-sm:hidden'}/>
        </form>
    );
};

export default SearchBar;