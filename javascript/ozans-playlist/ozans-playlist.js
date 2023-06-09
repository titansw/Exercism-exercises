// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} new playlist with unique entries
 */
export function removeDuplicates(playlist) {
  const list = new Set()
  playlist.forEach((content) => list.add(content))
  return [...list]
}

/**
 * Checks whether a playlist includes a track.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {boolean} whether the track is in the playlist
 */
export function hasTrack(playlist, track) {
  const list = new Set()
  playlist.forEach((content) => list.add(content))
  return list.has(track) 

}

/**
 * Adds a track to a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function addTrack(playlist, track) {
  const list = new Set()
  playlist.forEach((content) => list.add(content))
  list.add(track)
  return [...list] 
}

/**
 * Deletes a track from a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function deleteTrack(playlist, track) {
  const list = new Set()
  playlist.forEach((content) => list.add(content))
  list.delete(track)
  return [...list]
}

/**
 * Lists the unique artists in a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} list of artists
 */
export function listArtists(playlist) {
  const list = new Set()
  let play = []
  playlist.forEach(content => {
    play = content.split('- ');
    list.add(play[1]);
  });
  return [...list]
}
