import ClothingCategoriesCard from "../components/ClothingCategoriesCard";
import topsCard from "../clothe_images/categoriesicons/topscard.png";
import pantsCard from "../clothe_images/categoriesicons/pantscard.png";
import shoesCard from "../clothe_images/categoriesicons/shoescard.png";
import shortsCard from "../clothe_images/categoriesicons/shortscard.png";
import skirtsCard from "../clothe_images/categoriesicons/skirtscard.png";
import jacketsCard from "../clothe_images/categoriesicons/jacketcard.png";
import jeansCard from "../clothe_images/categoriesicons/jeansicon.png";
import accessCard from "../clothe_images/categoriesicons/accesscard.png";
import dressCard from "../clothe_images/categoriesicons/dresscard.png";
import bagCard from "../clothe_images/categoriesicons/bagicon.png";
import sweaterCard from "../clothe_images/categoriesicons/sweaterscard.png";
import leggingsCard from "../clothe_images/categoriesicons/leggingscard.png";

const ClothingLibraryPage = () => {
  return (
    <>
      <div className="flex flex-wrap justify-evenly m-4 gap-2">
        <ClothingCategoriesCard
          image={accessCard}
          page="/clothinglibrarypage/accessoriespage"
        />
        <ClothingCategoriesCard
          image={bagCard}
          page="/clothinglibrarypage/accessoriespage"
        />
        <ClothingCategoriesCard
          image={dressCard}
          page="/clothinglibrarypage/accessoriespage"
        />
        <ClothingCategoriesCard
          image={jacketsCard}
          page="/clothinglibrarypage/accessoriespage"
        />
        <ClothingCategoriesCard
          image={jeansCard}
          page="/clothinglibrarypage/accessoriespage"
        />
        <ClothingCategoriesCard
          image={leggingsCard}
          page="/clothinglibrarypage/accessoriespage"
        />
        <ClothingCategoriesCard
          image={pantsCard}
          page="/clothinglibrarypage/pantspage"
        />
        <ClothingCategoriesCard
          image={shoesCard}
          page="/clothinglibrarypage/shoespage"
        />
        <ClothingCategoriesCard
          image={shortsCard}
          page="/clothinglibrarypage/accessoriespage"
        />
        <ClothingCategoriesCard
          image={skirtsCard}
          page="/clothinglibrarypage/accessoriespage"
        />
        <ClothingCategoriesCard
          image={sweaterCard}
          page="/clothinglibrarypage/accessoriespage"
        />
        <ClothingCategoriesCard
          image={topsCard}
          page="/clothinglibrarypage/shirtspage"
        />
      </div>
    </>
  );
};

export default ClothingLibraryPage;
