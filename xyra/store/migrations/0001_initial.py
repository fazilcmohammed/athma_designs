# Generated by Django 5.2 on 2025-04-07 06:27

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Slider',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=255, null=True)),
                ('image', models.ImageField(upload_to='slider/')),
                ('description', models.TextField()),
            ],
            options={
                'verbose_name': 'Slider',
                'verbose_name_plural': 'Sliders',
            },
        ),
    ]
