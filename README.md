# Cloggers

Cloggers is deployed on GitHub Pages.

Cloggers utilises [TempleOSRS](https://templeosrs.com/api_doc.php) APIs to collate and display group collection log completion. This includes:

- Collectively displaying how many members have achieved a collection log, across all collection items
- The most collected - and therefore common - items within the group
- The least collected - and therefore scarce - items within the group
- Which members have collected which items
- The ability to filter collections by members
- Group rankings by the amount of collected items
- Unique collection items achieved by group members

To be able to utilise this tool, OSRS players will need to install the [TempleOSRS plugin](https://runelite.net/plugin-hub/show/temple-osrs) and sync their collection logs in-game. Oonce synced, members will need to be a part of a [TempleOSRS group](https://templeosrs.com/groups/view_groups.php). Then, simply search for the group ID to view group collection log stats.

A **huge** thank you to the TempleOSRS team for making fun little projects like this possible!

## Development

Cloggers is a [Svelte](https://svelte.dev/) project built with [Vite](https://vite.dev/), utilising [TypeScript](https://www.typescriptlang.org/). To develop this project locally:

- Clone the repository
- `npm run i` to install dependencies
- `npm run dev` to launch the server at http://localhost:5173/

This project uses [CORS Anywhere](https://github.com/Rob--W/cors-anywhere) as a CORS proxy to avoid issues when communicating with the API locally. This will require visiting the proxy [here](https://cors-anywhere.herokuapp.com/corsdemo) and launching the temporary demo access, otherwise API calls will error.
