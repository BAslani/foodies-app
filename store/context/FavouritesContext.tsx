import React, { FC, PropsWithChildren, createContext, useState } from "react"

type FavoriteContextTypes = {
  ids: string[]
  addFavorite: (id: string) => void
  removeFavorite: (id: string) => void
}

export const FavoriteContext = createContext<FavoriteContextTypes>({
  ids: [],
  addFavorite: () => {},
  removeFavorite: () => {},
})

const FavouritesContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [favorites, setFavorites] = useState<string[]>([])
  const addFavorite = (id: string) => {
    setFavorites((currentFavIds) => [...currentFavIds, id])
  }
  const removeFavorite = (id: string) => {
    setFavorites((currentFavIds) =>
      currentFavIds.filter((favId) => favId !== id)
    )
  }
  const values: FavoriteContextTypes = {
    ids: favorites,
    addFavorite,
    removeFavorite,
  }
  return (
    <FavoriteContext.Provider value={values}>
      {children}
    </FavoriteContext.Provider>
  )
}

export default FavouritesContextProvider
