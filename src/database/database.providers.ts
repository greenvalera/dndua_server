import { Sequelize } from 'sequelize-typescript';
import {Page} from "../pages/models/page.model";
import {Race} from "../races/models/race.model";
import {Class} from "../classes/models/class.model";
import {Spell} from "../spells/models/spell.model";
import {SpellAttributes} from "../spells/models/spellAttributes.model";
import {SpellsClasses} from "../spells/models/spells-classes.model";

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'mysql',
                host: process.env.DB_HOST,
                port: Number.parseInt(process.env.DB_PORT),
                username: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_DATABASE,
            });
            sequelize.addModels([Page, Race, Class, Spell, SpellAttributes, SpellsClasses]);
            await sequelize.sync();
            return sequelize;
        },
    },
];