<script lang="ts">
	import Button from "$lib/components/ui/button/button.svelte";
	import Label from "$lib/components/ui/label/label.svelte";

  // const { data } = $props();

  // $inspect(data.profiles);
</script>


<h1 class="text-2xl mb-4">Welcome to <span class="text-[#ff9800]">SvelteKit</span>, <span class="text-[#C6F94F]">Drizzle</span>, & <span class="text-[#47D191]">Supabase</span>!</h1>

<p class="mb-8">Visit <a class="text-[#ff9800]" href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the Sveltekit documentation, <a class="text-[#C6F94F]" href="https://orm.drizzle.team/docs/get-started">orm.drizzle.team/docs/get-started</a> for the Drizzle documentation, and <a class="text-[#47D191]" href="https://supabase.com/docs">supabase.com/docs</a> to read the supabase documentation.</p>

<Button href="/auth/login">Log In</Button>
