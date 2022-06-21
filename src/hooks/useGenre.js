const useGenre = (selectedGenres) => {
    if (selectedGenres.length < 1){
        return ""
    }

    const genreWithIds = selectedGenres.map((s) => s.id)
    return genreWithIds.reduce((acc, current) => acc + ',' + current)
}

export default useGenre;