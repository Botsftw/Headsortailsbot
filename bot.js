import discord
import asyncio
import random
import pickle
import os

client = discord.Client()

@client.event
async def on_ready():
    print("Logged in as:")
    print(client.user.name)
    print("ID")
    print(client.user.id)
    print('------')

@client.event
async def on_message(message):
    if message.content.startswith('!isryancool'):
        await client.send_message(message.channel,'Of Course')
    elif message.content.startswith('!flip'):
        flip = random.choice(['Heads','Tails'])
        await client.send_message(message.channel, flip)
    elif message.content.startswith('!addquote'):
        if not os.path.isfile("quote_file.pki"):
            quote_list = []
        else:
            with open("quote_file.pki", "rb") as quote_file:
                quote_list = pickle.load(quote_file)
        quote_list.append(message.content[9:])
        with open("quote_file.pki" , "wb") as quote_file:
            pickle.dump(quote_list , quote_file)
    elif message.content.startswith("!quote"):
        with open("quote_file.pki", "rb") as quote_file:
            quote_list = pickle.load(quote_file)
            await client.send_message(message.channel, random.choice(quote_list))
        

client.run('NDE1MTY0MDQ0NDQ2NzkzNzM5.DWx7jg.8qE9XqidYY0ryOJkrVz3WCx7rlg')
