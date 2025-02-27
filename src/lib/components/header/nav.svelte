<script>
	import NavLink from "./navLink.svelte";
  const Links = [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Stuff To Enjoy", href: "/stuff" }, 
    { text: "Bonus Support", href: "/bonus" },
    { text: "Merch", href: "/merch" }
  ]
</script>

<div class="my-4 border-b border-gray-500/50">
  <div class="flex w-max max-w-full justify-between space-x-4 pb-2 pr-2 text-lg text-gray-700 overflow-x-auto">
    {#each Links as link}
      <NavLink text={link.text} href={link.href} />
    {/each}
  </div>
</div>
