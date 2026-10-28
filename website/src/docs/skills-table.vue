<template>
    <div class="table-responsive">
        <table class="table md:table-stacked">
            <thead>
                <tr>
                    <th scope="col">技能（Skill）</th>
                    <th scope="col">描述</th>
                    <th scope="col">指南</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="skill in data.skills">
                    <td>
                        <a :href="`${config.examples}/skills/${skill.name}`">{{ skill.name }}</a>
                    </td>
                    <td>{{ skill.description }}</td>
                    <td><a :href="`/${skill.guide}`">{{ skill.guide }}</a></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import data from '@data/data.js'
import config from '@data/config.js'
</script>